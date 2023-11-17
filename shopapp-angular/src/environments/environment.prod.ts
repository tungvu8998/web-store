export const environment = {
    production: true,        
    //apiBaseUrl: 'http://shopapp-spring-container:8088/api/v1',
    //apiBaseUrl: 'http://shopapp-spring-service:8088/api/v1', //k8s
    //connect through host, not container
    apiBaseUrl: 'http://localhost:8099/api/v1' //Docker
};
