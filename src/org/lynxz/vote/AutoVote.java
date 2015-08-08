package org.lynxz.vote;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;
import java.util.logging.Logger;

import org.lynxz.utils.Commonfunctions;

public class AutoVote {
	// 通过firebug调试得到投票时上传的数据为: id=146&tel=18965870620&outside=0
	private static final String URL_ADDRESS = "http://116.213.200.40/vote/zan";// 居委会文艺展播投票地址
	private static String[] workIds = { "146" };// 投票作品id
	private static final String outside = "0";
	private static Logger logger = Logger.getLogger("AutoVote");
	private static final long SLEEP_DUARATION = 90000;//测试30s/60s会返回result = 2

	public static void main(String[] args) {
		workIds = new String[] { "146", "83" };
		submitPhoneNum(500, "13");
	}

	public static void submitPhoneNum(int count, String preFix) {
		Commonfunctions utility = Commonfunctions.getInstance();
		HashMap<String, String> params = new HashMap<>();
		String phoneNum = "", result = "";
		params.put("outside", outside);

		for (int i = 0; i < workIds.length; i++) {
			Set<String> randomPhoneNumSet = utility.getRandomPhoneNumSet(count,
					preFix);
			if (randomPhoneNumSet == null) {
				logger.info("randomPhoneNumSet == null");
				return;
			}
			Iterator<String> iterator = randomPhoneNumSet.iterator();
			while (iterator.hasNext()) {
				phoneNum = iterator.next();
				params.put("id", workIds[i]);
				params.put("tel", phoneNum);
				result = Commonfunctions.sendPost(URL_ADDRESS, params);
				if (result.contains("0")) {
					logger.info("投票成功 " + phoneNum);
				} else if (result.contains("2")) {
//					logger.info("30秒内只允许投一次");
				} else if (result.contains("8")) {
//					logger.info("每个手机号只能投票一次 " + phoneNum);
				}

				try {
					Thread.sleep(SLEEP_DUARATION);
				} catch (InterruptedException e) {
					logger.info(e.toString());
				}
			}
		}
	}
}
