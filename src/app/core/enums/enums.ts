export const actionOptions = {
    eng: {
      User: {
        eng: [{_id: 'Create', value : 'Create'}, {_id: 'Update', value: 'Update'}, {_id: 'Delete', value: 'Delete'}, {_id: 'Enable', value: 'Enable'}, {_id: 'Disable', value: 'Disable'}],
        jp: [{_id: 'Create', value : '作成'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '削除'}, {_id: 'Enable', value: '有効にする'}, {_id: 'Disable', value: '無効'}],
        cn: [{_id: 'Create', value : '创建'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '删除'}, {_id: 'Enable', value: '启用'}, {_id: 'Disable', value: '禁用'}]   
      },
  
      Customer: {
        eng: [{_id: 'Create', value : 'Create'}, {_id: 'Update', value: 'Update'}],
        jp: [{_id: 'Create', value : '作成'}, {_id: 'Update', value: '更新'}], 
        cn: [{_id: 'Create', value : '创建'}, {_id: 'Update', value: '更新'}] 
      },
      Site: {
        eng: [{_id: 'Create', value : 'Create'}, {_id: 'Update', value: 'Update'}, {_id: 'Delete', value: 'Delete'}, {_id: 'Enable', value: 'Enable'}, {_id: 'Disable', value: 'Disable'},{_id: 'Local Sync', value: 'Local Sync'}],
        jp: [{_id: 'Create', value : '作成'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '削除'}, {_id: 'Enable', value: '有効にする'}, {_id: 'Disable', value: '無効'},{_id: 'Local Sync', value: 'ローカルシンク'}],
        cn: [{_id: 'Create', value : '创建'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '删除'}, {_id: 'Enable', value: '启用'}, {_id: 'Disable', value: '禁用'},{_id: 'Local Sync', value: '本地同步'}],
    },
    Login: {
        eng:[{_id: 'Login', value : 'Login'}],
        jp:[{_id: 'Login', value : 'ログイン'}],
        cn:[{_id: 'Login', value : '登录'}]
    },
      Filter: {
        eng:[{_id: 'Create', value : 'Create'}, {_id: 'Update', value: 'Update'}, {_id: 'Delete', value: 'Delete'}], 
        jp:[{_id: 'Create', value : '作成'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '削除'}],
        cn:[{_id: 'Create', value : '创建'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '删除'}] 
    },
      Logout: {
        eng:[{_id: 'Logout', value : 'Logout'}],
        jp:[{_id: 'Logout', value : 'ログアウト'}],
        cn:[{_id: 'Logout', value : '登出'}]
      },
      Country: {
        eng:[{_id: 'Create', value : 'Create'}, {_id: 'Update', value: 'Update'}],
        jp:[{_id: 'Create', value : '作成'}, {_id: 'Update', value: '更新'}],
        cn:[{_id: 'Create', value : '创建'}, {_id: 'Update', value: '更新'}]
    },
      EmailTemplate: {
        eng: [{_id: 'Create', value : 'Create'}, {_id: 'Update', value: 'Update'}, {_id: 'Delete', value: 'Delete'}, {_id: 'Enable', value: 'Enable'}, {_id: 'Disable', value: 'Disable'}],
        jp: [{_id: 'Create', value : '作成'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '削除'}, {_id: 'Enable', value: '有効にする'}, {_id: 'Disable', value: '無効'}],
        cn: [{_id: 'Create', value : '创建'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '删除'}, {_id: 'Enable', value: '启用'}, {_id: 'Disable', value: '禁用'}]
      },
      NotificationRule: {
        eng: [{_id: 'Create', value : 'Create'}, {_id: 'Update', value: 'Update'}, {_id: 'Delete', value: 'Delete'}, {_id: 'Enable', value: 'Enable'}, {_id: 'Disable', value: 'Disable'}],
        jp: [{_id: 'Create', value : '作成'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '削除'}, {_id: 'Enable', value: '有効にする'}, {_id: 'Disable', value: '無効'}],
        cn: [{_id: 'Create', value : '创建'}, {_id: 'Update', value: '更新'}, {_id: 'Delete', value: '删除'}, {_id: 'Enable', value: '启用'}, {_id: 'Disable', value: '禁用'}]
      },
      AlarmGroups: {
        eng:[{_id: 'Delete', value: 'Delete'},{_id: 'Update', value: 'Update'}],
        jp:[{_id: 'Delete', value: '削除'},{_id: 'Update', value: '更新'}],
        cn:[{_id: 'Delete', value: '删除'},{_id: 'Update', value: '更新'}],
      },
      Alarm: { 
        eng:[{_id: 'Acknowledge', value: 'Acknowledge'}],
        jp:[{_id: 'Acknowledge', value: '認める'}],
        cn:[{_id: 'Acknowledge', value: '确认'}]
     },
      ChangePassword: { 
        eng:[{_id: 'Update', value: 'Update'}],
        jp:[{_id: 'Update', value: '更新'}], 
        cn:[{_id: 'Update', value: '更新'}], 
    },
      Import: { 
        eng:[{_id: 'Update', value: 'Update'}],
        jp:[{_id: 'Update', value: '更新'}], 
        cn:[{_id: 'Update', value: '更新'}],  
    },
    Export: { 
        eng:[{_id: 'Export', value: 'Export'}],
        jp:[{_id: 'Export', value: '輸出'}], 
        cn:[{_id: 'Export', value: '出口'}],  
    },
  
    jp: [
      { _id: 'Update', value: '更新' },
      { _id: 'Create', value: '作成' },
      { _id: 'Login', value: 'ログイン' },
      { _id: 'Logout', value: 'ログアウト' },
      { _id: 'Delete', value: '削除' },
      { _id: 'Enable', value: '有効にする' },
      { _id: 'Export', value: '輸出' },
      { _id: 'Disable', value: '無効' },
      { _id: 'Acknowledge', value: '認める' },
      { _id: 'LOCAL_SYNC', value: 'ローカルシンク' },
    ],
      
    eng:[
        { _id: 'Update', value: 'Update' },
        { _id: 'Create', value: 'Create' },
        { _id: 'Login', value: 'Login' },
        { _id: 'Logout', value: 'Logout' },
        { _id: 'Delete', value: 'Delete' },
        { _id: 'Enable', value: 'Enable' },
        { _id: 'Export', value: 'Export' },
        { _id: 'Disable', value: 'Disable' },
        { _id: 'Acknowledge', value: 'Acknowledge' },
        { _id: 'LOCAL_SYNC', value: 'Local Sync' },
    ],
    cn: [
      { _id: 'Update', value: '更新' },
      { _id: 'Create', value: '创建' },
      { _id: 'Login', value: '登录' },
      { _id: 'Logout', value: '登出' },
      { _id: 'Delete', value: '删除' },
      { _id: 'Enable', value: '启用' },
      { _id: 'Export', value: '出口' },
      { _id: 'Disable', value: '禁用' },
      { _id: 'Acknowledge', value: '确认' },
      { _id: 'LOCAL_SYNC', value: '本地同步' },
    ]
  }
}