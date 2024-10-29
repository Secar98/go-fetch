package main

import (
	"bytes"
	"io"
	"mime/multipart"
	"net/http"
	"net/url"
	"strings"
	"time"
)

type HttpRequest struct {
	Url              string
	Method           string
	Headers          map[string]string
	FormData         map[string]string
	Json             string
	QueryParameters  map[string]string
	SelectedBodyType string
}

type HttpResponse struct {
	StatusCode int
	Body       string
	Headers    map[string][]string
	Error      string
}

func (a *App) SendRequest(store *HttpRequest) HttpResponse {
	// Append query parameters to the URL
	store.Url = appendQueryParameters(store.Url, store.QueryParameters)

	// Create the request
	req, err := createRequest(store)
	if err != nil {
		return HttpResponse{Error: err.Error()}
	}

	// Add headers to the request
	addHeaders(req, store.Headers)

	// Send the request
	client := &http.Client{Timeout: time.Minute * 10}
	resp, err := client.Do(req)
	if err != nil {
		return HttpResponse{Error: err.Error()}
	}
	defer resp.Body.Close()

	// Read the response body
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return HttpResponse{Error: err.Error()}
	}

	return HttpResponse{
		StatusCode: resp.StatusCode,
		Body:       string(body),
		Headers:    resp.Header,
		Error:      "",
	}
}

func createRequest(store *HttpRequest) (*http.Request, error) {
	var req *http.Request
	var err error

	switch store.SelectedBodyType {
	case "form-data":
		var b bytes.Buffer
		w := multipart.NewWriter(&b)
		for key, value := range store.FormData {
			w.WriteField(key, value)
		}
		err := w.Close()
		if err != nil {
			return nil, err
		}
		req, err = http.NewRequest(store.Method, store.Url, &b)
		if err != nil {
			return nil, err
		}
		req.Header.Set("Content-Type", w.FormDataContentType())
	case "json":
		req, err = http.NewRequest(store.Method, store.Url, strings.NewReader(store.Json))
		if err != nil {
			return nil, err
		}
		req.Header.Add("Content-Type", "application/json")
	case "url-encoded":
		data := url.Values{}
		for key, value := range store.FormData {
			data.Set(key, value)
		}
		req, err = http.NewRequest(store.Method, store.Url, strings.NewReader(data.Encode()))
		if err != nil {
			return nil, err
		}
		req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	default:
		req, err = http.NewRequest(store.Method, store.Url, nil)
		if err != nil {
			return nil, err
		}
	}

	return req, nil
}

func addHeaders(req *http.Request, headers map[string]string) {
	for key, value := range headers {
		req.Header.Add(key, value)
	}
}

func appendQueryParameters(baseUrl string, params map[string]string) string {
	if len(params) == 0 {
		return baseUrl
	}
	query := url.Values{}
	for key, value := range params {
		query.Add(key, value)
	}
	return baseUrl + "?" + query.Encode()
}
