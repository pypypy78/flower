from app.core import controller

controllerClass = getattr(controller, "Controller")

# 鲜花种类
class Flower_types(controllerClass):
    def __init__(self, config={}):
        """
        构造函数
        @param {Object} config 配置参数
        """
        config_init = {
            # 选择的模板那路径模板
            "tpl": "./flower_types/",
            # 选择的服务
            "service": "flower_types",
        }
        config_temp = config
        config_temp.update(config_init)
        super(Flower_types , self).__init__(config_temp)


