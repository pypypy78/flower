from app.core import controller

controllerClass = getattr(controller, "Controller")

# 入库信息
class Storage_information(controllerClass):
    def __init__(self, config={}):
        """
        构造函数
        @param {Object} config 配置参数
        """
        config_init = {
            # 选择的模板那路径模板
            "tpl": "./storage_information/",
            # 选择的服务
            "service": "storage_information",
        }
        config_temp = config
        config_temp.update(config_init)
        super(Storage_information , self).__init__(config_temp)

    # 添加数据成功后
    def Add_after(self, ctx, result):
	    """
		添加数据前
		@param {Object} ctx http请求上下文
		@return {Object} 返回json-rpc格式结果
		"""
	    service = self.service
	    obj = service.Get_obj({}, {"orderby": "`storage_information_id` DESC"})
	    if obj:
	        # 计算
	        service.run("UPDATE `flower_warehouse` INNER JOIN `storage_information` ON flower_warehouse.flower_number=storage_information.flower_number SET flower_warehouse.number_of_flowers= flower_warehouse.number_of_flowers + storage_information.inventory_quantity WHERE storage_information.storage_information_id=" + str(obj["storage_information_id"]))
	    return result

