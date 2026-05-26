/*
 Classe: Usuario.java
 POJO simple que representa un usuario del sistema.
 Guardar en: Prueba/backend-maven/src/Usuario.java
*/
public class Usuario {
    // Identificador único del usuario
    private long id;
    // Nombre completo del usuario
    private String nombre;
    // Correo electrónico
    private String email;
    // Contraseña (en texto plano aquí; en producción aplicar hash)
    private String contrasena;
    // Rol: "admin" o "cliente"
    private String rol;

    // Constructor vacío
    public Usuario() {}

    // Constructor completo
    public Usuario(long id, String nombre, String email, String contrasena, String rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
        this.rol = rol;
    }

    // Getters y setters
    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContrasena() { return contrasena; }
    public void setContrasena(String contrasena) { this.contrasena = contrasena; }

    public String getRol() { return rol; }
    public void setRol(String rol) { this.rol = rol; }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", email='" + email + '\'' +
                ", rol='" + rol + '\'' +
                '}';
    }
}
