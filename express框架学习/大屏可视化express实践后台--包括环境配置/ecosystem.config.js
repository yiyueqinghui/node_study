module.exports = {
  apps : [{
    name   : "app",
    script : "./src/app.js",
    env:{    // 默认生产
    	NODE_ENV:"production"
    },
    env_development:{    //开发
    	NODE_ENV:"development"
    },
    env_test:{       // 测试
    	NODE_ENV:"test"
    }
  }]
}
