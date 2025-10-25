function quit()
{
    if(confirm("确定要退出吗？"))
    {
        console.log("Window closed");
        window.close();
    }
    else
    {
        document.getElementById("password").value = "";
    }
}

function toggle()
{
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.querySelector(".toggle-btn");
    
    // 切换输入框类型：password ↔ text
    if (passwordInput.type == "password") 
    {
      passwordInput.type = "text";                  // 可见
      toggleBtn.textContent = "🙈";                // 切换图标为“闭眼”
    } 
    else 
    {
      passwordInput.type = "password";             // 不可见
      toggleBtn.textContent = "👁️";                // 切换图标为“睁眼”
    }
}