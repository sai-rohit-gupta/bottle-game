import random
import pygame
import os

# Initialize pygame
pygame.mixer.init()

def play_audio(option):
    # Define the paths to your audio files for each option
    audio_files = {
        1: "Head.mp3",
        2: "Sholder.mp3",
        3: "knee.mp3",
        4: "toe.mp3",
        5: "Bottle.mp3"
    }
    
    audio_file = audio_files.get(option)
    if audio_file:
        pygame.mixer.music.load(audio_file)
        pygame.mixer.music.play()
        while pygame.mixer.music.get_busy():
            pygame.time.Clock().tick(10)

def main():
    while True:
        choice = random.randint(1, 5)
        print("Selected option:", choice)
        
        play_audio(choice)
        
        if choice == 5:
            print("Option 5 selected. Exiting...")
            break

if __name__ == "__main__":
    main()
