async function makeCall(uri, method, parameters) {
    var requestInit = {
        method: method
    };

    if (parameters != null) {
        requestInit.body = JSON.stringify(parameters);
        requestInit.headers = {
            "Content-Type": "application/json; charset=utf-8"
        };
    }

    var userStr = localStorage.getItem("userLogged");
    if (userStr) {
        var user = JSON.parse(userStr);
        if (!requestInit.headers) {
            requestInit.headers = {};
        }
        requestInit.headers["Authorization"] = `Bearer ${user.token}`;
        var response = await fetch(uri, requestInit);
        if (response.status === 401) {
            const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
            window.location.href = `${publicUrl.origin}/api/logout`;
        } else {
            return response;
        }
    } else {
        return await fetch(uri, requestInit);
    }
}