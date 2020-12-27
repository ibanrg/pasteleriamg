import * as api from "./ApiClient";

export async function add(producto) {
    var response = await api.makeCall('producto', 'POST', producto);
    return response.json();
}

export async function getAll() {
    var response = await api.makeCall('producto', 'GET');
    return response.json();
}

export async function remove(producto) {
    var response = await api.makeCall('producto', 'DELETE', producto);
    return response.json();
}