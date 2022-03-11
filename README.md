# insta-cache-be

Instagram Cache Back-End

## Purpose

Complete the Software Engineer assignment from scratch. That is, a starter project will not be provided.

This project is designed for you to demonstrate your knowledge of:

- Software development
- System design
- Developer operations

You have been asked to lead development of a new full-stack project using JavaScript (preferably TypeScript) or Java (
preferably Kotlin).

Implement the following requirements as you would in a professional environment using industrystandard best practices.

Do so in a manner that reflects the depth of your experience.

Requirements:

- A team of software engineers can productively collaborate on this codebase.
- A client application can input an Instagram handle and receive a JSON response that contains:
    - Datetime data was last retrieved from Instagram
    - Instagram account's biography
    - Instagram account's full name
    - Instagram account's followers count
    - Instagram account's most recent post, including its:
        - Media URL
        - Number of likes
        - Number of comments
        - Post type, e.g. carousel, image, or video

Note: Data may be cached for up to 1 hour, but clients must be provided with a method to request the latest data.

Hint! Instagram has a public, rate-limited API that returns a JSON response.

To retrieve an account, for instance, append `?__a=1` to the URL.

- Account: https://www.instagram.com/simonahalep/?__a=1
- Post: https://www.instagram.com/p/CVxFg8MvsvL/?__a=1

Questions? Email the Hiring Manager at [mihai.andreica@fortech.ro](mailto:mihai.andreica@fortech.ro)

Done? Upload your project to GitHub, and respond with a link to your repository so our team can review your work
history.

## Usage

Either inject environment variables into the current environment or create a `.env` file in the rood directory of the
project. Sample `.env` file:

```dotenv
# App config
LOG_LEVEL=debug
PORT=3000
```

Then, install the packages using `npm install` and start the application using `npm start`.

Run a smoke test by opening the following routes:

```http request
GET http://localhost:3000/hello
```

should return "Hello, guest!"

```http request
GET http://localhost:3000/hello/world
```

should return "Hello, world!"

---
---
---
---
---

### Get Instagram Account

```http request
GET http://localhost:3000/account/ACCOUNT_ID
Cache-Control: CACHE_CONTROL
```

Where:

- `ACCOUNT_ID` is the Instagram Account id
- `CACHE_CONTROL` is optional and can be one of `no-store` or `no-cache`

Data is cached for 1 hour unless otherwise specified through the `Cache-Control` header.

### Get Instagram Post

```http request
GET http://localhost:3000/post/POST_ID
Cache-Control: CACHE_CONTROL
```

Where:

- `POST_ID` is the Instagram Post id
- `CACHE_CONTROL` is optional and can be one of `no-store` or `no-cache`

Data is cached for 1 hour unless otherwise specified through the `Cache-Control` header.

## About

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

&copy; 2022 Florin Ardelian [florin@ardelian.ro](mailto:florin@ardelian.ro)
