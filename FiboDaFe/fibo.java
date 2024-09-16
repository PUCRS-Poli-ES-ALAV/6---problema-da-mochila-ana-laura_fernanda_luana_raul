package FiboDaFe;

import java.util.HashMap;
import java.util.Map;

public class fibo {
	private Map<Integer, Integer> memo;
	private int iterations;
	private int instructions;

	public fibo() {
		this.memo = new HashMap<>();
		this.iterations = 0;
		this.instructions = 0;
	}

	public int calcularFibonacci(int n) {
		this.iterations++;  // Incrementar contador de iterações
		this.instructions++;  // Instrução de verificação de memo

		if (this.memo.containsKey(n)) {
			this.instructions++;  // Instrução de retorno de memo
			return this.memo.get(n);
		}

		this.instructions++;  // Instrução de verificação de n <= 1
		if (n <= 1) {
			this.memo.put(n, n);
			this.instructions++;  // Instrução de atribuição
		} else {
			this.instructions += 2;  // Instruções de chamada recursiva
			this.memo.put(n, calcularFibonacci(n - 1) + calcularFibonacci(n - 2));
			this.instructions++;  // Instrução de atribuição
		}

		return this.memo.get(n);
	}

	public int getIterations() {
		return this.iterations;
	}

	public int getInstructions() {
		return this.instructions;
	}
}
