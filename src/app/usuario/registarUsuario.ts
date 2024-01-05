import Usuario from "@/core/usuario/model/usuario";
import TerminalUtil from "../util/terminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistarUsuario";
import SenhaCrypto from "@/adapter/auth/SenhaCrypto";
import IdHash from "@/adapter/auth/IdHash";
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPg";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registar Usuario");
    const nome = await TerminalUtil.campoRequerido("Nome: ", "");
    const email = await TerminalUtil.campoRequerido("Email: ", "");
    const senha = await TerminalUtil.campoRequerido("Senha: ", "");
    const usuario: Usuario = { nome, email, senha };
    
    const provedorCripto = new SenhaCrypto();
    const repositorio = new RepositorioUsuarioPg();
    const idHash = new IdHash();
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto, idHash);

    await casoDeUso.executar(usuario);
    TerminalUtil.sucesso("Usuario Registrado com Sucesso.");
    await TerminalUtil.esperarEnter();
}