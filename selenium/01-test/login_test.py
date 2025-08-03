from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Safari()
driver.maximize_window()

username = "standard_user"
password = "secret_sauce"
login_url = "https://www.saucedemo.com/v1/"

driver.get(login_url)

username_field = driver.find_element(By.ID, "user-name")
password_field = driver.find_element(By.ID, "password")

username_field.send_keys(username)
password_field.send_keys(password)

login_button = driver.find_element(By.ID, "login-button")
# check btn is not disabled
assert not login_button.get_attribute("disabled")
login_button.click()

wait = WebDriverWait(driver, 10)

success_element = wait.until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".product_label"))
)

# ✅ Validate success
assert success_element.text == "Products", f"Expected 'Products' but got '{success_element.text}'"
print("Login test passed successfully.")

# Optional: close the browser
driver.quit()
