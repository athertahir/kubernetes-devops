package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
)

var name = getName()

func getName() string {
	if name := os.Getenv("Name"); name != "" {
		return name
	}
	return "Ather"
}
func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/time", func(w http.ResponseWriter, r *http.Request) {

		currentTime := time.Now().Format("01-02-2006 15:04") //, time.Now().Format())
		fmt.Fprintf(w, "%s Hello %s\n", currentTime, name)
	})
	fmt.Printf("Started Server on port 80\n")
	http.ListenAndServe(":80", r)
}
