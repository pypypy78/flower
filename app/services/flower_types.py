from app.core.mysql import Service


# 鲜花种类服务
class Flower_types(Service):
    def __init__(self, *config):
        """
        构造函数
        @param {Object} config 配置参数
        """
        if config:
            config_temp = config[0]
        else:
            config_temp = {
                # 操作的表
                "table": "flower_types",
                # 分页大小
                "size": 30,
                "page": 1,
            }
        super(Flower_types , self).__init__(config_temp)
