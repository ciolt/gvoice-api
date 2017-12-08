'use strict';

class GoogleVoice {
	/** WebClient object used when making requests to Google Voice */
	WebClient() {

	}
  
  get WebClient() {}
  set WebClient() {}
  
  /** GALX data provided by Google */
  get GALX() {}
  set GALX() {}
  
  get Session() {}
  set Session() {}

  get AccountData_Account() {}
  set AccountData_Account() {}
  
  get VariableCollection_LoginParameters() {}
  set VariableCollection_LoginParameters() {}
  
  /** Creates a new instance of the GoogleVoice service */
	GoogleVoice() {
		let WebClient = new WebClient();
	}
  
  /**
	 * Generates a URL that corresponds to the correct web service endpoint on Google Voice;
	 * this method returns a URL based on the calling method or the supplied parameter
	 * @param {string} method
	 * @returns {string} URL
	 */
	static GenerateUrl(method = null) {
		if(!method) new Error().stack;

		switch (method.toLowerCase()) {
			case "login":
				return "https://accounts.google.com/ServiceLoginAuth";

			case "executelogin":
				return "https://accounts.google.com/signin/challenge/sl/password?service=grandcentral&continue=https://www.google.com/voice";
				//return "https://accounts.google.com/ServiceLogin?service=grandcentral&continue=https://www.google.com/voice";

			case "inbox":
				return "https://www.google.com/voice/b/0/inbox/recent/";

			case "starred":
				return "https://www.google.com/voice/b/0/inbox/recent/starred/";

			case "spam":
				return "https://www.google.com/voice/b/0/inbox/recent/spam/";

			case "trash":
				return "https://www.google.com/voice/b/0/inbox/recent/trash/";

			case "history":
				return "https://www.google.com/voice/b/0/inbox/recent/all/";

			case "voicemail":
				return "https://www.google.com/voice/b/0/inbox/recent/voicemail/";

			case "texts":
				return "https://www.google.com/voice/b/0/inbox/recent/sms/";

			case "recorded":
				return "https://www.google.com/voice/b/0/inbox/recent/recorded/";

			case "placed":
				return "https://www.google.com/voice/b/0/inbox/recent/placed/";

			case "missed":
				return "https://www.google.com/voice/b/0/inbox/recent/missed/";

			case "received":
				return "https://www.google.com/voice/b/0/inbox/recent/received/";

			case "sms":
				return "https://www.google.com/voice/b/0/sms/send/";

			case "call":
				return "https://www.google.com/voice/b/0/call/connect/";

			case "search":
				return "https://www.google.com/voice/b/0/inbox/search/";

			default: 
				return "http://www.google.com/voice/b/0/";
				break;
		}
	}
  
  IGVRequestResult = {
		CheckRelogin: function(rr, result) {
			rr.RequiresRelogin = result.Content.includes("The username or password you entered is incorrect.");
			return rr;
		}
  }

  Logout() {
    this.Session = "";
    return true;
  }
  
  /** Performs a login to Google Voice */
  
};

module.exports = GoogleVoice;