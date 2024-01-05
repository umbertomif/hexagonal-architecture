import Usuario from "@/core/usuario/model/usuario";
import TerminalUtil from "../util/terminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistarUsuario";
import InverterSenhaCrypto from "@/adapter/auth/InverterSenhaCrypto";
import EspacoSenhaCrypto from "@/adapter/auth/EspacoSenhaCrypto";
import SenhaCrypto from "@/adapter/auth/SenhaCrypto";
import RepositorioEmMemoria from "@/adapter/db/RepositorioUsuarioEmMemoria";
import IdHash from "@/adapter/auth/IdHash";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registar Usuario");
    const nome = await TerminalUtil.campoRequerido("Nome: ", "");
    const email = await TerminalUtil.campoRequerido("Email: ", "");
    const senha = await TerminalUtil.campoRequerido("Senha: ", "");
    const usuario: Usuario = { nome, email, senha };
    
    const provedorCripto = new SenhaCrypto();
    const repositorio = new RepositorioEmMemoria();
    const idHash = new IdHash();
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto, idHash);

    await casoDeUso.executar(usuario);
    TerminalUtil.sucesso("Usuario Registrado com Sucesso.");
    await TerminalUtil.esperarEnter();
}