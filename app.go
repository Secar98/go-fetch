package main

import (
	"context"
	"fmt"
	"io"
	"net/http"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Send Request
type HttpRequest struct {
	Url              string
	Method           string
	Headers          map[string]string
	FormData         map[string]string
	Json             string
	QueryParameters  map[string]string
	SelectedBodyType string
}

func (a *App) SendRequest(store *HttpRequest) string {
	req, err := http.NewRequest(store.Method, store.Url, nil)
	if err != nil {
		return fmt.Sprintf("Error creating request: %v", err)
	}

	// Add headers to the request
	for key, value := range store.Headers {
		req.Header.Add(key, value)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Sprintf("Error making request: %v", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Sprintf("Error reading response body: %v", err)
	}

	return string(body)
}
