package org.lynxz.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

public class Commonfunctions {

	private static Commonfunctions utility = null;
	private static Logger logger = null;

	private Commonfunctions() {
		logger = Logger.getLogger("Commonfunctions");
	}

	public static synchronized Commonfunctions getInstance() {
		if (utility == null) {
			utility = new Commonfunctions();
		}
		return utility;
	}

	/**
	 * @function 生成随机电话号码
	 * @param totalCount 总共生成多少个11位手机号码
	 * @param preFix 号码开头前缀 如,13,14,15,17,18等等
	 * @return
	 */
	public Set<String> getRandomPhoneNumSet(int totalCount, String preFix) {
		String[] validPrefix = { "13", "14", "15", "17", "18" };
		boolean isPrefixValid = false;
		for (String tempFre : validPrefix) {
			if (tempFre.equals(preFix)) {
				isPrefixValid = true;
			}
		}

		if (!isPrefixValid) {
			logger.info("preFix异常 preFix = " + preFix);
			preFix = validPrefix[0];
		}

		HashSet<String> phoneSet = new HashSet<>();
		StringBuilder sb = new StringBuilder();
		double randomDouble = 0;
		BigDecimal bg = null;
		int index = 0;
		for (int i = 0; i < totalCount;) {
			if (index >= totalCount * 5) {
				return phoneSet;
			}
			sb.setLength(0);
			sb.append(preFix);

			randomDouble = Math.random() * Math.pow(10, 11);
			bg = new BigDecimal(randomDouble);
			sb.append(bg.toString().substring(0, 9));
			phoneSet.add(sb.toString());
			index++;
			i = phoneSet.size();
		}

		return phoneSet;
	}

	/**
	* @function 向指定 URL 发送POST方法的请求
	* @param url 发送请求的 URL
	* @param param 请求参数，使用key,value的形式,会自动使用"&"进行连接
	* @return 响应结果
	*/
	public static String sendPost(String url, Map<String, String> params) {
		PrintWriter out = null;
		BufferedReader in = null;
		String result = "";
		String param = "";
		String connector = "&";

		for (Map.Entry<String, String> entry : params.entrySet()) {
			param += connector + entry.getKey() + "=" + entry.getValue();
		}
		if (param.startsWith(connector)) {
			param = param.substring(1);
		}

		try {
			URL realUrl = new URL(url);
			// 打开和URL之间的连接
			URLConnection conn = realUrl.openConnection();
			// 设置通用的请求属性 - 可以通过firebug直接抓取
			conn.setRequestProperty("accept", "*/*");
			conn.setRequestProperty("connection", "Keep-Alive");
			conn.setRequestProperty("user-agent",
					"Mozilla/5.0 (X11; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0");

			// 发送POST请求必须设置如下两行
			conn.setDoOutput(true);
			conn.setDoInput(true);

			// 获取URLConnection对象对应的输出流
			out = new PrintWriter(conn.getOutputStream());

			// 发送请求参数
			// flush输出流的缓冲
			out.print(param);
			out.flush();

			// 定义BufferedReader输入流来读取URL的响应
			in = new BufferedReader(
					new InputStreamReader(conn.getInputStream()));
			String line;
			while ((line = in.readLine()) != null) {
				result += line;
			}
		} catch (Exception e) {
			logger.info("发送 POST 请求出现异常！" + e);
			e.printStackTrace();
		} finally {
			try {
				if (out != null) {
					out.close();
				}
				if (in != null) {
					in.close();
				}
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
		return result;
	}
}
