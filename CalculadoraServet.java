import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.BufferedReader;

public class CalculadoraServet {
    public static void main(String[] args) {
        while (true) {
            leerDatos();
            try {
                Thread.sleep(5000); // Leer datos cada 5 segundos
            } catch (InterruptedException e) {
                return;
            }
        }
    }

    private static void leerDatos() {
        File archivo = new File("datos.txt");
        if (!archivo.exists()) return; 

        try (BufferedReader br = new BufferedReader(new FileReader(archivo))) {
            String linea = br.readLine();
            if (linea != null) {
                System.out.println("Datos recibidos: " + linea);
                int total = calcularTotal(linea);
                System.out.println("Precio total: " + total + "€");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static int calcularTotal(String datos) {
        String[] partes = datos.split(",");
        int total = 0;
        for (String parte : partes) {
            String[] keyValue = parte.split("=");
            total += Integer.parseInt(keyValue[1]);
        }
        return total;
    }
}
