# ملف run.py لتنفيذ لغة HG

import sys
import os

def run_hg_file(file_path):
    # تنفيذ ملف HG
    print(f"Executing HG file: {file_path}")
    # قم بتنفيذ الملف هنا

if __name__ == "__main__":
    # التحقق من وجود مسار الملف كوسيطة سطر الأوامر
    if len(sys.argv) < 2:
        print("Usage: python run.py <file_path>")
        sys.exit(1)

    # الحصول على مسار الملف من سطر الأوامر
    file_path = sys.argv[1]

    # التحقق من صحة مسار الملف
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        sys.exit(1)

    # تنفيذ الملف HG
    run_hg_file(file_path)
      
