$(function() {
    //从layui导入form
    var form = layui.form
    var layer = layui.layer
        //创建自己的表单验证规则
    form.verify({
        nickname: function(value) {
            if (value.length < 6) {
                return '昵称长度必须在1~6字符之间'
            }
        }
    })

    initUserInfo()

    //初始化用户基本信息
    function initUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败')
                }
                console.log(res);
                //调用form.val()快速为表单赋值
                form.val('formUserInfo', res.data)

            }
        })
    }
    $('#btnReset').on('click', function(e) {
        e.preventDefault()
        initUserInfo()

    })
    $('.layui-form').on('submit', function(e) {
        //阻止表单默认提交行为
        e.preventDefault()
            //发起ajax（）请求
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('修改用户信息失败!')
                }
                layer.msg('修改用户信息成功！')
                    //调用父页面的方法
                window.parent.getUseinfo()
            }

        })

    })


})