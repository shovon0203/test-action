# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# List files for debugging
RUN echo "Listing files in /usr/src/app:" && ls -al /usr/src/app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# List files after installation
RUN echo "Listing files in /usr/src/app after installation:" && ls -al /usr/src/app

# Specify the command to run your application
CMD ["python", "./main.py"]


