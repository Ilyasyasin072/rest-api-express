### Tamu / users
- id
- nama depan
- nama belakang
- jenis_kelamin
- tanggal lahir
- email
- password
- aktifasi
- alamat_tamu
- no tlp
- id_kota
- id_provinsi

### Provinsi
- id
- nama_provinsi

### Kota
- id
- id_provinsi
- nama kota

### Reservasi
- id
- nama_res
- user_id
- id_kamar
- checkin_id

### Check_in
- id
- tgl_checkin
- user_id

### Kamar
- id
- jenis_kamar
- harga
- jumlah_kamar

### Pembayaran
- id
- id_reservasi
- total

### pegawai
- id 
- nama_pegawai
- jabatan_pegawai
- alamat_pegawai
- no_tlp
- pendidikan
- tahun_masuk
- tanggal_lahir