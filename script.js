document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (name && password) {
        if (password === "webgis") {
            // Simpan nama user
            localStorage.setItem('webgisUser', name);
            
            // Arahkan ke Dashboard (Menu Pilihan), BUKAN langsung ke NextGIS
            window.location.href = "dashboard.html"; 
        } else {
            alert("Kata sandi salah! Silakan coba lagi.");
        }
    } else {
        alert("Mohon lengkapi nama dan kata sandi!");
    }
});