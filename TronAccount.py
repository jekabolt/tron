from tronpy import Tron, Contract
from tronpy.keys import PrivateKey

client = Tron(network="shasta")
wallet = client.generate_address()
print("Wallet address:  %s" % wallet['base58check_address'])
print("Private Key:  %s" % wallet['private_key'])
