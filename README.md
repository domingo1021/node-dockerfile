### Test for dockefile

### Summary

Start a "hello world" express server with dockerfile

```cmd
docker build -t <image-name> .
```

```cmd
docker run -dp 3000:3000 <image-name>
# -d: run process in background
# -p: by pass localhost 3000 to container port 3000
```
