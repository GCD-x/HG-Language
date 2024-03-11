# main.py

from hg_parser import HGParser
from hg_interpreter import HGInterpreter

def main():
    input_file = "your_hg_file.hg"
    parser = HGParser(input_file)
    parsed_data = parser.parse()

    interpreter = HGInterpreter(parsed_data)
    interpreter.interpret()

if __name__ == "__main__":
    main()
