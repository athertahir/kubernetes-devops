kubectl apply -f deploy-backend.yaml
kubectl expose deployment backend --type=ClusterIP

kubectl apply -f deploy-frontend.yaml
kubectl expose deployment frontend --type=LoadBalancer
kubectl get service frontend --watch