---
title: Install Opencv3 for Python3
description: Install Opencv3 for python3
date: 2018-01-01 18:00
categories:
 - opencv
tags:
- env
---

### 环境
Ubuntu 16.04 LTS  
Python3.5
Opencv3

### 相关的软件包安装

```shell
[compiler]:  
sudo apt-get install build-essential
    
[required]: 
sudo apt install -y libpng12-dev
sudo apt install -y cmake git pkg-config libavcodec-dev libavformat-dev libswscale-dev
sudo apt install -y libgtk2.0-dev

[optional]: 
sudo apt -y install libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev
```
**For python3:**
```shell
sudo apt -y install python3-numpy python3-matplotlib python-opencv
# 下面的要注意自己的python版本是否为3.5
sudo apt -y install python3.5-dev
python3.5-config --includes
sudo cp /usr/include/x86_64-linux-gnu/python3.5m/pyconfig.h /usr/include/python3.5m
```

### 下载源码

从http://opencv.org/releases.html下载source包．
或者从GitHub下载源码：https://github.com/opencv/opencv

eg:
```bash
git clone https://github.com/opencv/opencv.git
```

### Building OpenCV from Source Using CMake

创建build目录，在这里会产生许多中间文件。
```bash
cd ~/opencv
mkdir build
cd build
```

***使用下面的编译选项可安装到Python3*** (Python3.5)
```shell
cmake -DBUILD_TIFF=ON \
  -DBUILD_opencv_java=OFF \
  -DWITH_CUDA=OFF \
  -DENABLE_AVX=ON \
  -DWITH_OPENGL=ON \
  -DWITH_OPENCL=ON \
  -DWITH_IPP=ON \
  -DWITH_TBB=ON \
  -DWITH_EIGEN=ON \
  -DWITH_V4L=ON \
  -DWITH_QT=OFF \
  -DWITH_GTK=ON \
  -DWITH_OPENGL=ON \
  -DBUILD_opencv_python2=OFF \
  -DBUILD_opencv_python3=ON \
  -DBUILD_TESTS=OFF \
  -DBUILD_PERF_TESTS=OFF \
  -DCMAKE_BUILD_TYPE=RELEASE \
  -DCMAKE_INSTALL_PREFIX=$(python3 -c "import sys; print(sys.prefix)") \
  -DPYTHON_EXECUTABLE=$(which python3) \
  -DPYTHON_INCLUDE_DIR=$(python3 -c "from distutils.sysconfig import get_python_inc; print(get_python_inc())") \
  -DPYTHON_INCLUDE_DIR2=/usr/include/x86_64-linux-gnu/python3.5m \
  -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.5m.so \
  -DPYTHON3_NUMPY_INCLUDE_DIRS=/usr/lib/python3/dist-packages/numpy/core/include \
  -DPYTHON_PACKAGES_PATH=$(python3 -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())") .. 
```

### 安装
```shell
make -j8
sudo make install
```

---

Reference: 
http://docs.opencv.org/master/d7/d9f/tutorial_linux_install.html
