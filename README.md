
# First Lambda - Real-time inventory

A brief description of what this project does

Processing:
Logs the request body.
Extracts SKUs from the line items in the order.
Constructs an object containing order details, including customer information, order currency, shipping address, and the extracted SKUs.
Invokes an AWS Lambda function, passing the order details as the payload.
Logs the response from the Lambda function.
Sends a JSON response indicating success or failure of the Lambda function invocation.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Legitbunny/firstLambda.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the serverless locally

```bash
  serverless invoke local --stage dev -f firstLambda
```


## Tech Stack

**Client:** REST APIs, AWS Lambda, IAM, Cloudwatch

**Server:** Node, Express, serveerless, aws sdk


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

---

Throughout the development of this project, I gained valuable insights into integrating two backends using AWS Lambda and Node.js. This experience was particularly enlightening as it allowed me to automate the process of product transfer, ensuring real-time synchronization of inventory across different systems.

The project involved setting up AWS Lambda functions to facilitate communication between the two backends, enabling seamless data exchange in real-time. This was achieved by leveraging Node.js for server-side scripting, which provided the necessary flexibility and efficiency for handling the dynamic nature of inventory data.

One of the key challenges I encountered was ensuring the reliability and accuracy of the inventory synchronization process. To address this, I implemented robust error handling and validation mechanisms within the AWS Lambda functions. This not only improved the overall reliability of the system but also enhanced the user experience by minimizing the risk of data discrepancies.

In summary, this project was a pivotal learning experience that deepened my understanding of cloud computing, serverless architecture, and the integration of different backend systems. It provided me with practical skills in automating complex processes and enhanced my ability to develop scalable and reliable solutions.

---

## Documentation

[Documentation](https://docs.google.com/document/d/1w38gCivk-Pk0VLKr5oSCHEuT3TW3Ny41/edit?usp=sharing&ouid=106008763205918033358&rtpof=true&sd=true)

