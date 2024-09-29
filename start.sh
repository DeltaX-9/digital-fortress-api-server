# Variables
IMAGE_NAME="digital_fortress_api_server"  # Change to your desired image name
CONTAINER_NAME="digital_fortress_api_server"  # Change to your desired container name
DOCKERFILE_PATH="."  # Assuming the Dockerfile is in the current directory
PORT_MAPPING="5555:5555"  # Mapping Streamlit's default port

# Stop and remove any existing container with the same name
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# Rebuild the image (without cache)
docker build --no-cache -t $IMAGE_NAME $DOCKERFILE_PATH

# Run the container with the rebuilt image
docker run -d --name $CONTAINER_NAME -p $PORT_MAPPING $IMAGE_NAME
