package main

import (
	"io"
	"net/http"
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
	req, err := http.NewRequest(store.Method, store.Url, nil)
	if err != nil {
		return HttpResponse{
			Error: err.Error(),
		}
	}

	for key, value := range store.Headers {
		req.Header.Add(key, value)
	}

	client := &http.Client{
		Timeout: time.Minute * 10,
	}
	resp, err := client.Do(req)
	if err != nil {
		return HttpResponse{
			Error: err.Error(),
		}
	}

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return HttpResponse{
			Error: err.Error(),
		}
	}

	return HttpResponse{
		StatusCode: resp.StatusCode,
		Body:       string(body),
		Headers:    resp.Header,
		Error:      "",
	}
}
