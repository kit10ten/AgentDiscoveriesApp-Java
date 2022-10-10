// package org.softwire.training.api.integration.admin;

// import org.junit.jupiter.api.BeforeAll;
// import org.junit.jupiter.api.Test;
// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.WebElement;
// import org.openqa.selenium.support.ui.ExpectedConditions;
// import org.openqa.selenium.support.ui.Select;
// import org.openqa.selenium.support.ui.WebDriverWait;
// import org.softwire.training.api.integration.helper.LoginHelper;
// import org.softwire.training.api.integration.helper.WebDriverHelper;

// import static org.junit.jupiter.api.Assertions.assertTrue;

// public class AddLocationsIT {
//    public static final String TARGET_ADDRESS = System.getProperty("target.address");

//    private static WebDriver driver;
//    private static WebDriverWait wait;

//    @BeforeAll
//    public static void setUp() {
//        driver = WebDriverHelper.getSharedDriver();
//        wait = new WebDriverWait(driver, 10);
//    }

//    @Test
//    public void testCanAddLocation() {
//        driver.get(TARGET_ADDRESS);
//        LoginHelper.ensureLoggedIn(driver);
//        driver.get(TARGET_ADDRESS + "/#/admin/locations");

//        WebElement addLocationButton = driver.findElement(By.id("add-location"));
//        addLocationButton.click();
//        WebElement statusInput = driver.findElement(By.id("status-input"));
//        statusInput.sendKeys("1");
//        WebElement reportInput = driver.findElement(By.id("report-input"));
//        reportInput.sendKeys("A test report");
//        WebElement submitButton = driver.findElement(By.id("submit-report"));
//        submitButton.click();

//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("alert-info")));
//        WebElement alert = driver.findElement(By.className("alert-info"));
//        assertTrue(alert.getText().contains("Report submitted"));
//    }
// }