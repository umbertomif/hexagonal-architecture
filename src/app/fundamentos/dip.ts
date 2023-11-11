import TerminalUtil from "../util/terminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import corrida from "@/core/fundamentos/Corrida";
import { terminal } from "terminal-kit";

export default async function dip() {
    TerminalUtil.titulo("DIP");
    const [tipoCarro] = await TerminalUtil.selecao("Tipo de Carro?", ["Ferrari", "Fusca"]);
    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca();
    corrida(carro, terminal.red);
    await TerminalUtil.esperarEnter();
}
