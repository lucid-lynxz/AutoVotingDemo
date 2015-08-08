package org.lynxz.test;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Test {
	public static void main(String[] args) {
		double random = Math.random();
		System.out.println(random);
		double pow = Math.pow(10, 11);
		double temp = random * pow;
		System.out.println(pow);
		String tempStr = Double.toString(temp);
		tempStr = tempStr.substring(0, 9);
		BigDecimal bg = new BigDecimal(temp);
		bg.setScale(11, RoundingMode.DOWN);
		System.out.println(bg.toString().substring(0, 9) + " ------- ");

		System.out.println(tempStr);
	}
}
