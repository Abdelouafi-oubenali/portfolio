import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // تحديث الحالة لعرض واجهة احتياطية
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // يمكنك تسجيل الخطأ مثلاً في خدمة خارجية
    console.error('خطأ تم التقاطه:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-600 bg-red-100">
          <h2 className="text-xl font-bold mb-2">حدث خطأ في التطبيق</h2>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
