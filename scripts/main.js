import * as server from "@minecraft/server";
import * as ui from "@minecraft/server-ui";

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:lobby",
        description:"ロビーにテレポートします",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[
        ],
        optionalParameters:[
        ]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("tp @s 0 201 0")
        },1)
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:hub",
        description:"ロビーにテレポートします",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[
        ],
        optionalParameters:[
        ]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("tp @s 0 201 0")
        },1)
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:spawn",
        description:"スポーン地点にテレポートします",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[
        ],
        optionalParameters:[
        ]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("tp @s 0 89 0")
        },1)
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:rtp",
        description:"ランダムな座標にテレポートします",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[
        ],
        optionalParameters:[
        ]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("spreadplayers 0 0 100 1000 @s 10")
        },1)
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:help",
        description:"コマンド一覧を表示します",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[

        ],
        optionalParameters:[

        ]
    },(origin, arg) => {
        origin.sourceEntity.sendMessage("§a---コマンド一覧---§r\n/help §aコマンド一覧を表示します§r\n/lobby §aロビーにテレポートします§r\n/hub §aロビーにテレポートします§r\n/spawn §aスポーン地点にテレポートします§r\n/rtp §aランダムな座標にテレポートします§r\n/rule §aルール一覧を表示§r\n/staff §a管理者一覧を表示§r\n/version §aバージョンを表示§r\n/sit §aその場に座ります§r")
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:version",
        description:"アドオンのバージョンを表示します",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[

        ],
        optionalParameters:[

        ]
    },(origin, arg) => {
        origin.sourceEntity.sendMessage("§a---バージョン---§r\nAddon v0.0.1\nMinecraft v1.21.102")
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:staff",
        description:"このサーバーの管理者を表示します",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[

        ],
        optionalParameters:[

        ]
    },(origin, arg) => {
        origin.sourceEntity.sendMessage("§a---Staff List---§r\nTakkunlego0916\nyukkuti88129")
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:rule",
        description:"ルールを閲覧できます",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[
        ],
        optionalParameters:[
        ]
    },(origin, arg) => {
        origin.sourceEntity.sendMessage("1.チート・ハック・オートクリッカーなどの外部ツールの使用禁止\n2.無所属・平和主義での国の荒らし禁止\n3.バグの悪用禁止(例外あり)\n4.サーバーに過度に負荷をあたるようなこと禁止\n5.暴力的・性的発言・ハラスメントなど禁止\n6.スパム禁止\n7.戦争は相手の国王または国王がいるときのみ許可\n8.リスキル禁止\n9.チェストなどのアイテムを相手の許可なくとること(窃盗)禁止")
    })
})

function show_form(player){
    const form = new ui.ActionFormData();
    form.title("RE:キノキノ鯖総合");
    form.button("ルールを見る");
    form.button("ロビーにテレポート");
    form.button("コマンド一覧");
    form.button("レポートを送信");
    form.button("スポーン地点にテレポート");
    form.button("Help Bookを入手")
    form.show(player).then((response) => {
        switch(response.selection){
            case 0:
                player.sendMessage("1.チート・ハック・オートクリッカーなどの外部ツールの使用禁止\n2.無所属・平和主義での国の荒らし禁止\n3.バグの悪用禁止(例外あり)\n4.サーバーに過度に負荷をあたるようなこと禁止\n5.暴力的・性的発言・ハラスメントなど禁止\n6.スパム禁止\n7.戦争は相手の国王または国王がいるときのみ許可\n8.リスキル禁止\n9.チェストなどのアイエムを相手の許可なくとること(窃盗)禁止");
                break;
            case 1:
                player.runCommand("tp @s 0 201 0");
                break;
            case 2:
                player.sendMessage("§a---コマンド一覧---§r\n/help §aコマンド一覧を表示します§r\n/lobby §aロビーにテレポートします§r\n/hub §aロビーにテレポートします§r\n/spawn §aスポーン地点にテレポートします§r\n/rtp §aランダムな座標にテレポートします§r\n/rule §aルール一覧を表示§r\n/staff §a管理者一覧を表示§r\n/version §aバージョンを表示§r\n/report §aレポートを送信§r\n/sit §aその場に座ります§r");
                break;
            case 3:
                show_report_form(player);
                break;
            case 4:
                player.runCommand("tp @s 0 89 0");
                break;
            case 5:
                player.runCommand("execute as @s run structure load helpbook ~~~");
                break;
        }
    }).catch(error =>
        player.sendMessage("An error occurred: " + error.message)
    );
}

function show_report_form(player){
    const form = new ui.ModalFormData();
    form.title("Reportを送信する");
    form.textField("プレイヤーのMCIDを入力","MCID");
    form.textField("理由を入力","理由");
    form.show(player).then(response => {
        if (response.canceled){
            player.sendMessage("キャンセルされました");
            return;
        }
        player.sendMessage("正常に通報されました。ご協力ありがとうございます。");
        player.sendMessage("通報したプレイヤー：" + String(response.formValues[0]));
        player.sendMessage("理由：" + String(response.formValues[1]));
    })
    .catch(error => {
        player.sendMessage("エラー: " + error.message);
    });
}

server.world.afterEvents.itemUse.subscribe(ev => {
    if(ev.itemStack.typeId == "minecraft:stick"){
        show_form(ev.source);
    }
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:menu",
        description:"棒メニューを表示します",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[
        ],
        optionalParameters:[
        ]
    },(origin, arg) => {
        show_form(origin.sourceEntity)
    })
})

server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"rekinokino:report",
        description:"レポートを送信します",
        permissionLevel : server.CommandPermissionLevel.Any,
        mandatoryParameters:[
        ],
        optionalParameters:[
        ]
    },(origin, arg) =>{
        show_report_form(origin.sourceEntity)
    })
})
