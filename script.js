document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    // Cek apakah nama sudah diisi
    if (name) {
        // Simpan nama user ke penyimpanan browser
        localStorage.setItem('webgisUser', name);
        
        // Langsung arahkan ke Dashboard
        window.location.href = "dashboard.html"; 
    } else {
        // Jika nama kosong
        alert("Mohon masukkan nama anda untuk melanjutkan!");
    }
});
