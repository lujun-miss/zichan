// 通用Modal弹窗组件
class Modal {
    constructor(options) {
        this.options = {
            title: '标题',
            content: '',
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: '确定',
            showCancelButton: true,
            cancelButtonText: '取消',
            onConfirm: () => {},
            onCancel: () => {},
            onClose: () => {},
            onModalShow: () => {},
            ...options
        };
        
        this.modalElement = null;
    }
    
    render() {
        const modalHTML = `
            <div id="modal-overlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                    <div class="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-800">${this.options.title}</h3>
                        ${this.options.showCloseButton ? `
                            <button id="modal-close" class="text-gray-400 hover:text-gray-600">
                                <i class="fa fa-times text-xl"></i>
                            </button>
                        ` : ''}
                    </div>
                    <div class="p-6">
                        ${this.options.content}
                    </div>
                    ${(this.options.showConfirmButton || this.options.showCancelButton) ? `
                        <div class="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
                            ${this.options.showCancelButton ? `
                                <button id="modal-cancel" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                    ${this.options.cancelButtonText}
                                </button>
                            ` : ''}
                            ${this.options.showConfirmButton ? `
                                <button id="modal-confirm" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    ${this.options.confirmButtonText}
                                </button>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        this.modalElement = document.getElementById('modal-overlay');
        
        // 添加事件监听
        if (this.options.showCloseButton) {
            document.getElementById('modal-close').addEventListener('click', () => this.close());
        }
        
        if (this.options.showConfirmButton) {
            document.getElementById('modal-confirm').addEventListener('click', () => {
                this.options.onConfirm();
                this.close();
            });
        }
        
        if (this.options.showCancelButton) {
            document.getElementById('modal-cancel').addEventListener('click', () => {
                this.options.onCancel();
                this.close();
            });
        }
        
        // 点击遮罩层关闭
        this.modalElement.addEventListener('click', (e) => {
            if (e.target === this.modalElement) {
                this.close();
            }
        });
    }
    
    show() {
        this.render();
        this.options.onModalShow();
    }
    
    close() {
        if (this.modalElement) {
            this.modalElement.remove();
            this.options.onClose();
        }
    }
}

// 工厂函数，简化使用
function showModal(options) {
    const modal = new Modal(options);
    modal.show();
    return modal;
}