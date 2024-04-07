from app.core import controller

controllerClass = getattr(controller, "Controller")


# 敏感词
class Sensitive_vocabulary(controllerClass):
    def __init__(self, config={}):
        """
        构造函数
        @param {Object} config 配置参数
        """
        config_init = {
            # 选择的模板那路径模板
            "tpl": "./sensitive_vocabulary/",
            # 选择的服务
            "service": "sensitive_vocabulary",
        }
        config_temp = config
        config_temp.update(config_init)
        super(Sensitive_vocabulary, self).__init__(config_temp)
