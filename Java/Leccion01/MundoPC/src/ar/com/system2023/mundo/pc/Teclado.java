package ar.com.system2023.mundo.pc;

public class Teclado extends DispositivoEntrada{
    private final int idTeclado;
    private static int contadorTeclados;
    
    //constructot
    public Teclado(String tipoEntrada,String marca){
        super(tipoEntrada,marca);
        this.idTeclado = ++Teclado.contadorTeclados;
        
    }

    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado +", "+super.toString()+ '}';
    }
}
