# Kubernetes DevOps Helm

### Setup(With Helm):
Run following command inside ./helm directory
- helm install ./charts/ -f ./charts/values.yaml -n demo

Run following command to delete helm release
- helm del --purge demo

### Setup(Without Helm):
Run deploy.bat script to provision following resources:
 - Frontend Deployment
 - Frontend Service(ClusterIP)
 - Backend Deployment
 - Backend Service(LoadBalancer)
Run clean.bat to delete provisioned resources

### Frontend
- Get PublicIP using "kubectl get service frontend --watch"
- Access using Browser/Postman
- Using CURL
	- kubectl exec -it <pod_name> --container frontend sh
	- curl http://backend:80/api/time
	- curl http://backend.default.svc.cluster.local/api/time
