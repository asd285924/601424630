// myLibrary.js
(function (global) {
    'use strict';

    // 定义一个功能方法
    function ShowFormalOffice(message) {
        alert(message);
    }

    //正式服务处发放道具的方法
    async function FormalOffice() {
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_ShuGui');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_ChaJi');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_YuanJi');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_GangQin');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_ShiZhong');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_BiLu');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_FangJi');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
        if (stopExecution) return; // 检查停止标志位
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div/div[2]/div[3]/table/tbody/tr/td[11]/div/button');

        console.log('输入道具到输入框');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input');
        await typeIntoElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/div/div/input', 'FURN_FuWuChu_ShuangRenShaFa');

        await sleep(200);

        console.log('点击“关闭”按钮后的第一个<span>标签');
        await clickElement('(.//*[normalize-space(text()) and normalize-space(.)="关闭"])[4]/following::span[1]');

        console.log('点击保存或提交按钮');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]');
        await clickElement('//div[@id="app"]/div/section/section/div[2]/div/div[3]/div/div[2]/form/div[2]/div[7]/button');

        console.log('发送道具成功');
        // ------------------------------------------------------------------------------------------------------------------------------------------------
    }
    // 将方法暴露给全局对象
    global.myLibrary = {
        showAlert: showAlert,
        FormalOffice: FormalOffice
    };
})(window);
