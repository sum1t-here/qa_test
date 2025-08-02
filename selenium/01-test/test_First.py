from selenium import webdriver
import time

# This will automatically download the driver via Selenium Manager (v4.6+)
driver = webdriver.Safari()

driver.get("https://www.google.com")
title = driver.title
print(title)

assert "Google4f" in title


# time.sleep(5)
# driver.quit()
