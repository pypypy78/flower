from app.core import controller

controllerClass = getattr(controller, "Controller")

# 鲜花商城
class Flower_mall(controllerClass):
    def __init__(self, config={}):
        """
        构造函数
        @param {Object} config 配置参数
        """
        config_init = {
            # 选择的模板那路径模板
            "tpl": "./flower_mall/",
            # 选择的服务
            "service": "flower_mall",
        }
        config_temp = config
        config_temp.update(config_init)
        super(Flower_mall , self).__init__(config_temp)


