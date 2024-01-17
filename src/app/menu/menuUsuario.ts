import TerminalUtil from "@/app/util/terminalUtil";
import registrarUsuario from "../usuario/registarUsuario";

export default async function menuUsuario() {
    TerminalUtil.titulo("Usuario");
    const [indice] = await TerminalUtil.menu(["1. Registar Usuario", "Voltar"]);
    switch (indice) {
        case 0:
            await registrarUsuario();
            break;
        default:
            return;
    }
}
