import asyncio
from playwright.async_api import async_playwright
import os

async def capture_screenshots():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Set viewport to a common desktop size
        await page.set_viewport_size({"width": 1280, "height": 800})

        routes = {
            "home": "/",
            "about": "/about",
            "services": "/services",
            "doctors": "/doctors",
            "appointments": "/appointments",
            "emergency": "/emergency",
            "contact": "/contact"
        }

        # Start the dev server in the background
        process = await asyncio.create_subprocess_shell(
            "npm run dev",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        # Wait for server to be ready
        max_retries = 30
        for i in range(max_retries):
            try:
                await page.goto("http://localhost:3000", wait_until="networkidle", timeout=5000)
                break
            except Exception:
                await asyncio.sleep(2)

        for name, route in routes.items():
            print(f"Capturing {name}...")
            await page.goto(f"http://localhost:3000{route}", wait_until="networkidle")
            # Wait a bit for any animations
            await asyncio.sleep(1)
            await page.screenshot(path=f"/home/jules/verification/{name}.png", full_page=True)

        await browser.close()
        process.terminate()

if __name__ == "__main__":
    asyncio.run(capture_screenshots())
