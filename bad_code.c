#include <stdio.h>
#include <string.h>

void vulnerable_function(char *str) {
    char buffer[10];
    // 脆弱性: 入力サイズをチェックせずにコピーしているため、10バイトを超えるとバッファオーバーフローが発生する
    strcpy(buffer, str); 
    printf("Buffer content: %s\n", buffer);
}

int main(int argc, char *argv[]) {
    if (argc > 1) {
        vulnerable_function(argv[1]);
    } else {
        printf("Please provide an argument.\n");
    }
    return 0;
}
