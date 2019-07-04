package vishal_Page_Class;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Login_page {
	
	@FindBy(name = "email")
	WebElement username1;
		
	@FindBy(xpath= "//*[@id='continue']")
	WebElement continuebtn;

}
