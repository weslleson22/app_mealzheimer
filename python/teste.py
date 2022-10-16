from distutils import text_file
from lib2to3.pgen2 import driver
from selenium import webdriver
import itertools
import time
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys #Habilitando o teclado

# Navegar até o whatsapp web
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get('https://web.whatsapp.com/')#pegar o link do site
time.sleep(20)#Tempo para scanear o celular no navegador
#definir contato e grupos e mensagem a ser enviada
contatos = ['Laryssa']
messagem = ['Testando bot whastsapp']

def buscar_contato(contato):
    campo_pesquisa = driver.find_elements_by_xpath('//div[contains(@class,"copyable-text selectable-text")]')#pegando o campo
    time.sleep(3)
    campo_pesquisa[1].click()    
    campo_pesquisa[1].send_keys(contato)
    campo_pesquisa[1].send_keys(Keys.ENTER)

def enviar_mensagem(mensagem):
    campo_mensagem = driver.find_elements_by_xpath('//div[contains(@class,"copyable-text selectable-text")]')
    campo_mensagem[1].click()
    time.sleep(3)

    for text in itertools.repeat(campo_mensagem[1].send_keys(mensagem), 40+1):  
      campo_mensagem[1].send_keys(mensagem)
      campo_mensagem[1].send_keys(Keys.ENTER)

for contato in contatos:
    buscar_contato(contato)
    enviar_mensagem(mensagem)

